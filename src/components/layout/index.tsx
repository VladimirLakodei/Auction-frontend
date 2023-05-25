import React from "react";
// import styles from "./index.module.css";
import { Header } from "../header";
import { Layout as AntLayout } from "antd";

type Props = {
  children: React.ReactNode;
};

// export const Layout: React.FC<Props> = (Props) => { // same
export const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <AntLayout.Content style={{ height: "100%", padding: "0 50px" }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};
