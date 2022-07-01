import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { subCategories } from "../../data/navigation/nav-sub-categories";
import { subSubCategories } from "../../data/navigation/nav-sub-sub-categories";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import MenuButtom from "../../share/UIElements/MenuButton/MenuButtom";
import LinkButton from "../../share/UIElements/LinkButton/LinkButton";
import { styled as muiStyled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import RightTooltip from "../Navigation/RightTooltip/RightTooltip";
import LanguageIcon from "@mui/icons-material/Language";

export default function MobileMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerOpen2, setDrawerOpen2] = useState(false);
  const [subCategoryToShow, setSubCategoryDataToShow] = useState([]);
  const connectWalletMessage = "Create NFT Profile, and exchange KXP for $KSU";
  const chooseLanguageMessage = "Theme: 🌝 / 🌚 ";

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

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const toggleDrawer2 = (open, subCategory) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen2(open);
    const sub_cat_to_show = subSubCategories.filter(
      (category) => category.id === subCategory
    );

    sub_cat_to_show.length > 0 &&
      setSubCategoryDataToShow(sub_cat_to_show[0].categories);
  };

  return (
    <div>
      <MenuIcon
        sx={{
          width: "4rem",
          height: "4rem",
          color: "black",
        }}
        onClick={toggleDrawer(true)}
      />

      <Drawer
        anchor={"left"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            overflow: "visible",
          },
        }}
      >
        <div
          style={{
            width: "80vw",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
            overflow: "visible",
          }}
        >
          <div
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "50%",
              position: "absolute",
              right: "-6rem",
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
            }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon sx={{ fontSize: "2.2rem" }} />
          </div>
          <div>
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
          </div>
          <div
            style={{
              padding: ".6rem 1rem",
              marginTop: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
              }}
            >
              Most Popular
            </span>
          </div>
          {subCategories[0].categories.map((cat) => (
            <div
              key={cat.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: ".6rem 1rem",
              }}
              onClick={toggleDrawer2(true, cat.id)}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  textTransform: "capitalize",
                  fontWeight: "500",
                }}
              >
                {cat.name}
              </span>
              <ArrowForwardIosIcon sx={{ fontSize: "1.2rem" }} />
            </div>
          ))}
        </div>
      </Drawer>

      <Drawer anchor={"left"} open={drawerOpen2} sx={{ overflow: "visible" }}>
        <div
          style={{
            background: "#ecf7ff",
            display: "flex",
            alignItems: "center",
            padding: "1.4rem",
          }}
          onClick={toggleDrawer2(false)}
        >
          <ArrowBackIosIcon sx={{ fontSize: "1.2rem" }} />
          <span
            style={{
              fontSize: "1.3rem",
              marginLeft: "1rem",
              fontWeight: "500",
            }}
          >
            Menu
          </span>
        </div>
        <div
          style={{
            width: "80vw",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "1rem",
          }}
        >
          {subCategoryToShow.map((cat, indx) => (
            <div
              key={indx}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: ".6rem 1rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.5rem",
                  textTransform: "capitalize",
                  fontWeight: "500",
                }}
              >
                {cat}
              </span>
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
}
