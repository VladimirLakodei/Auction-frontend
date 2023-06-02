import { Table, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { Paths } from "../../paths";
import { Layout } from "../../components/layout";
import type { ColumnsType } from "antd/es/table";
import { Lot } from "../../types";
import { useGetAllAuctionLotsQuery } from "../../app/services/auction";

export const AuctionLotList = () => {
  const navigate = useNavigate();
  const params = useParams<{ filter: string }>();
  const { data, isLoading } = useGetAllAuctionLotsQuery(params);
  const goToAddLot = () => navigate(Paths.auctionLotAdd);

  const columns: ColumnsType<Lot> = [
    {
      title: "Назва лоту",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Опис лоту",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Дата завершеня",
      dataIndex: "endDate",
      key: "endDate",
    },
  ];

  return (
    <Layout>
      <Button type="primary" style={{ margin: "16px 0" }} onClick={goToAddLot}>
        Add Lot
      </Button>

      <Table
        loading={isLoading}
        rowKey={(record) => String(record.id)}
        columns={columns}
        dataSource={data}
        pagination={false}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.auctionLot}/${record.id}`),
          };
        }}
      />
    </Layout>
  );
};
