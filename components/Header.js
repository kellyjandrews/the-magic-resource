import { Image, Link } from "@chakra-ui/core"; 

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <Link href="/">
        <Image maxW={"350px"} src="/logo.svg" />
      </Link>
    </nav>
  )
}

export default Header;