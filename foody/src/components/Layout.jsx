const { default: Footer } = require("./Footer")
const { default: Header } = require("./Header")

const Layout = ({children}) => {
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}
export default Layout