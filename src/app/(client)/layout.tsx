
import { Header } from "../../components/client/header";
import { Shadow } from "../../components/client/shadow";
const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
export default ClientLayout