import { Box, Grid } from "@chakra-ui/react";
import AxioComopo from "./AxioCompo";

export default function AxioANDSimple() {
  return (
    <>
      <Box h="600px" backgroundColor="#F5F5F5">
        <Grid
          templateColumns="repeat(2,1fr)"
          margin="0px 200px 0px 200px"
          gap="10"
        >
          <AxioComopo
            img="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-simpl-logo-homepage-1_300x.png?v=1657347661"
            Head1="10% CASHBACK UP TO ₹750 ON "
            Head2="ORDERS ABOVE ₹5,000/-"
            text={[
              "Offer period: Valid till 31st July, 2022",
              "Sale offer",
              "Payment Gateway: Select Simpl Pay in 3 at Checkout to transact with",
              "Simpl",
            ]}
          />
          <AxioComopo
            img="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-axio-logo-homepage-1_300x.png?v=1657347643"
            Head1="FLAT ₹500 CASHBACK ON"
            Head2="ORDERS ABOVE ₹5,000"
            text={[
              "Tenure Available: 3 months",
              "Offer period: Till 31st July, 2022",
              "Eligibility: All Walnut369 users, No Credit Card Required",
              "Payment Gateway: Choose Razorpay at Checkout",
            ]}
          />
          <AxioComopo
            img="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphones-Zone-bajaj-finserv-logo_254x.png?v=1657960437"
            Head1="NO COST EMI WITH BAJAJ"
            Head2="FINSERV"
            text={[
              "Tenure available: 3 Months",
              "Eligibility: All Bajaj Finserv card owners",
              "Transaction value: Available on all orders above Rs. 4,500/-",
              "Payment Gateway: Choose Razorpay at checkout",
            ]}
          />
          {/* <AxioComopo img=""></AxioComopo> */}
        </Grid>
      </Box>
    </>
  );
}
