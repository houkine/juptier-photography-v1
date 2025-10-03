
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
      <Shadow />
      {children}
    </>
  );
}
export default ClientLayout