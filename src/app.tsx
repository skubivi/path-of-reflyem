import "@fontsource/manrope"
import { Box } from "@mui/material"
import MainHeader from "./components/main-header/main-header"
import { Outlet } from "react-router-dom"
import SideBar from "./components/sidebar/sidebar"

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 1,
        minHeight: '100dvh'
      }}
    >
      <MainHeader />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1
        }}
      >
        <SideBar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default App
