import React from "react";
import { store } from "./app/store";
import { Paths } from "./paths";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from "antd";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { BitAdd } from "./pages/bit-add";
import { LotAdd } from "./pages/lot-add";
import { AuctionLot } from "./pages/auction-lot";
import { AuctionLotList } from "./pages/auction-lot-list";

const container = document.getElementById("root")!;
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <AuctionLotList />,
  },
  {
    path: Paths.auctionLots,
    element: <AuctionLotList />,
  },
  {
    path: `${Paths.auctionLots}/:filter`,
    element: <AuctionLotList />,
  },
  {
    path: `${Paths.auctionLot}/:id`,
    element: <AuctionLot />,
  },
  {
    path: Paths.auctionLotAdd,
    element: <LotAdd />,
  },
  {
    path: Paths.bitAdd,
    element: <BitAdd />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
