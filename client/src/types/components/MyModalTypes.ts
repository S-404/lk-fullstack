import React from "react"

export interface MyModalTypes {
    visible: boolean;
    setVisible: (value: boolean) => void;
    children: React.ReactElement;
    title: string;
}
