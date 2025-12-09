import { ReactComponentProps } from "../interfaces/index.ts";
import Footer from "./Footer"
import Header from "./Header"

const Layout: React.FC<ReactComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout;