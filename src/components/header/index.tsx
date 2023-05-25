import { Paths } from "../../paths";
import { DollarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Layout } from "antd";
import style from "./index.module.css";

export const Header = () => {
  const headerStyle: React.CSSProperties = {
    background: "#f7f7f7",
  };

  return (
    <Layout.Header style={headerStyle} className={style.header}>
      <DollarOutlined className={style.teamIcon} />

      <nav>
        <Link className={style.link} to={Paths.auctionLots}>
          Всі лоти
        </Link>
        <Link className={style.link} to={Paths.auctionLotToday}>
          Завершуються сьогодні
        </Link>
        <Link className={style.link} to={Paths.auctionLotEnded}>
          Завершені
        </Link>
      </nav>
    </Layout.Header>
  );
};
