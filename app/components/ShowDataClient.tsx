"use client";
interface ShowDataClientProps {
  data: any;
}

const ShowDataClient: React.FC<ShowDataClientProps> = ({ data }) => {
  console.log(data);
  return <div>ShowDataClient</div>;
};

export default ShowDataClient;
