import type { ComponentProps } from "react";

export type User = {
    id: number;
    username: string;
    email?: string;
    info?: string;
}

export type ComponentsStatus = "loading" | "success" | "error" | "idle";

// export type ButtonProps =  {
//     children: React.ReactNode;
//     className?: string;
//     onClick?: React.MouseEventHandler<HTMLButtonElement>;
// }

export type ButtonProps = ComponentProps<"button"> & {
    variant?: "primary" | "secondary" | "neutral" | "success";
    text?: string;
}

export type UserProfileProps = {
    username: string;
    image: string;
    info?: string;
    status: "active" | "inactive"
}