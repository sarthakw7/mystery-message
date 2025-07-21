import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { Message } from "@/model/User";
import { NextResponse } from "next/server";

interface SendMessageRequest {
  username: string;
  content: string;
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, content } = (await request.json()) as SendMessageRequest;

    if (!username || !content) {
      return NextResponse.json(
        {
          success: false,
          message: "Username and content are required",
        },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({ username });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }

    if (!user.isAcceptingMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "User is not accepting messages",
        },
        { status: 403 }
      );
    }

    const newMessage: Message = {
      content,
      createdAt: new Date(),
    };

    user.message.push(newMessage);
    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message",
      },
      { status: 500 }
    );
  }
}
