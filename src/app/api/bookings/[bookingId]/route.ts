import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";

import prisma from "@/lib/prismadb";

interface IParams {
  bookingId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const { bookingId } = params;

  if (!bookingId) return NextResponse.error();

  const booking = await prisma.booking.deleteMany({
    where: {
      id: bookingId,
      OR: [
        {
          userId: currentUser.id,
        },
        {
          listing: {
            userId: currentUser.id,
          },
        },
      ],
    },
  });

  return NextResponse.json(booking);
}
