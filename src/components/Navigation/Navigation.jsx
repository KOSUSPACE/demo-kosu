import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import LanguageIcon from "@mui/icons-material/Language";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import LinkButton from "../../share/UIElements/LinkButton/LinkButton";
import MenuButtom from "../../share/UIElements/MenuButton/MenuButtom";
import RightTooltip from "./RightTooltip/RightTooltip";
import SearchBar from "./SearchBar/SearchBar";
import Categories from "./Categories/Categories";
import AppbarLeft from "./AppbarLeft/AppbarLeft.styles";
import MobileMenu from "../MobileMenu/MobileMenu";

const connectWalletMessage = "Create NFT Profile, and exchange KXP for $KSU";
const chooseLanguageMessage = "Theme: 🌝 / 🌚 ";
const Navigation = () => {
  //
  const RightTooltipWithStyle = muiStyled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      // minWidth: 250,
      color: theme.palette.grey[900],
      borderRadius: 0,
      padding: 0,
    },
  }));
  const LeftTooltipWithStyle = muiStyled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      minWidth: 830,
      color: theme.palette.grey[900],
      borderRadius: 0,
      padding: 0,
    },
  }));

  const HamburerContainer = styled.div`
    display: flex;
    flex-grow: 1;

    @media (min-width: 576px) {
      display: none;
    }
  `;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.paper",
          height: "7.2rem",
          px: "2.4rem",
          boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
        }}
      >
        <Toolbar disableGutters sx={{ my: "auto", gap: 1 }}>
          <HamburerContainer>
            <MobileMenu />
          </HamburerContainer>

          <Box>
            <img
              src="/images/header/logo-kosu.svg"
              alt="KŌSU"
              width="91"
              height="34"
            />
          </Box>
          <AppbarLeft>
            <MenuButtom>
              <LeftTooltipWithStyle
                title={<Categories />}
                placement="bottom-start"
              >
                <span>Categories</span>
              </LeftTooltipWithStyle>
            </MenuButtom>
            <Box sx={{ flexGrow: 1 }}>
              <SearchBar />
            </Box>
            <MenuButtom>
              <RightTooltipWithStyle
                title={
                  <RightTooltip
                    text={connectWalletMessage}
                    buttonMessage="Dashboard & Leaderboard"
                  />
                }
                placement="bottom-end"
              >
                <span>
                  <LinkButton fontSize="1.4rem" height="4rem" width="16rem">
                    Connect Wallet
                  </LinkButton>
                </span>
              </RightTooltipWithStyle>
            </MenuButtom>

            <MenuButtom>
              <RightTooltipWithStyle
                title={
                  <RightTooltip
                    text={chooseLanguageMessage}
                    buttonMessage="Language: 🇨🇳 🇬🇧 🇫🇷 🇮🇩 🇯🇵"
                  />
                }
                placement="bottom-end"
              >
                <span>
                  <LinkButton color="white" height="4rem" width="4rem">
                    <LanguageIcon sx={{ fontSize: "2rem" }} />
                  </LinkButton>
                </span>
              </RightTooltipWithStyle>
            </MenuButtom>
          </AppbarLeft>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
