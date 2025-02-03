"use client";
import { WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useRef, useEffect, useState } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({ roomId }: { roomId: string }) {

    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {

        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZTA1ZThhOS01NWMzLTQwYWEtOTYxOC04NWY4N2Q5MzM5ZjgiLCJpYXQiOjE3Mzg2MDk5NDR9.o47V1Ti-okxeVtKFv9_7ubnsFGi7iI3O2Qm6nKyWnhc`);

        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type: "join_room",
                roomId
            }))
        }

    }, [])

    if (!socket) {
        return <div>
            Connecting to Server......
        </div>
    }
    return <div>
        <Canvas roomId={roomId} socket={socket} />

    </div>
}