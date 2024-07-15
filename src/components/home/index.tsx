"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/rootReducer";
import { setPrices, setSelectedStock } from "@/store/slices/pricesSlice";

interface HomepageProps {
  crptoList: string[];
}

const Homepage: React.FC<HomepageProps> = ({ crptoList }) => {
  //   const [selecteditem, setselecteditems] = useState(crptoList[0]);
  //     const [tabledata, settabledata] = useState(null);
  //   const baseUrl = "http://localhost:3001";
  //   const response = await fetch(`${baseUrl}/api/list`);

  const dispatch = useDispatch();
  const { data, selectedStock } = useSelector(
    (state: RootState) => state.prices
  );

  //   useEffect(() => {
  //     dispatch(setSelectedStock(crptoList[0]));
  //   }, []);
  console.log(selectedStock, "selectedStock");
  useEffect(() => {
    const feactdata = async () => {
      try {
        if (selectedStock) {
          const baseUrl = "http://localhost:3001";
          const response = await fetch(`${baseUrl}/api/list/${selectedStock}`);
          // settabledata(await response.json());
          dispatch(setPrices(await response.json()));
        }
      } catch (e) {
        console.log(e);
      }
    };
    feactdata();
    const interval = setInterval(feactdata, 5000); // Poll every 5 min
    return () => clearInterval(interval);
  }, [selectedStock, dispatch]);

  return (
    <>
      <div className="selectbox">
        <div style={{marginRight:"5px"}}>Select stock : </div>
        <Select
          defaultValue={selectedStock}
          onValueChange={(e) => dispatch(setSelectedStock(e))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select stock" />
          </SelectTrigger>

          <SelectContent className="selectitem">
            {crptoList?.map((x) => {
              return (
                <SelectItem value={x} key={x} >
                  {x}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <Card style={{ margin: "10px" }}>
        <CardHeader>
          <CardTitle> Latest Stocks - {selectedStock}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Symbol</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                {/* <TableHead className="text-right">Amount</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((x) => (
                <TableRow key={x._id}>
                  <TableCell className="font-medium">{x.symbol}</TableCell>
                  <TableCell>{x.price}</TableCell>
                  <TableCell>{x.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};
export default Homepage;
