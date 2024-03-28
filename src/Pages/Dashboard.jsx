import Card from "../Components/Card";
import Table from "../Components/Table";
import Barchart from "../Components/Barchart";
import DashCalendar from "../Components/DashCalendar";
const Dashboard = () => {
  return (
    <div className="flex xl:gap-8 lg:gap-8">
      <div className="flex-col  ">
        <div className="pl-4 pt-3 w-[700px] border">
          <div className=" flex gap-4 justify-center">
            <Card
              titleName="Order"
              description="8553"
              footer=""
              cardWidth="min-w-[200px]"
              cardColor="bg-green-700"
            />
            <Card
              titleName="Client"
              description="460"
              footer=""
              cardWidth="min-w-[200px]"
              cardColor="bg-green-700"
            />
            <Card
              titleName="Total"
              description="12 Tones"
              footer="All recycled"
              cardWidth="min-w-[200px]"
              cardColor="bg-green-700"
            />
          </div>
          <Table />
        </div>
      </div>
      <div className="flex-col   ">
        <div className=" ">
          <DashCalendar />
        </div>{" "}
        <div>
          <Card
            titleName="Recent Updates"
            description=" "
            footer="KEMRI made a new order"
            cardWidth="min-w-[239px] text-sm "
            cardColor="bg-green-700"
          />
        </div>
        <div className=" mt-10">
          <p className="py-2 text-slate-gray  font-montserrat text-lg">
            Order Statistics
          </p>
          <div className=" pt-5 rounded-lg text-[0.8rem] font-palanquin hover:border-green-800 bg-gray-200 border w-[260px] h-[170px]">
            <Barchart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
