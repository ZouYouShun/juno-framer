import rcBlue from "./rcBlue/index";
import rcBlueMobile from "./rcBlue/mobile/index";
import rcJupiterBlue from "./rcJupiterBlue/index";
import rcJupiterBlueMobile from "./rcJupiterBlue/mobile/index";
import rcDark from "./rcDark/index";
import rcDarkMobile from "./rcDark/mobile/index";
import rcHighContrast from "./rcHighContrast/index";
import rcHighContrastMobile from "./rcHighContrast/mobile/index";
import rcPhoenix from "./rcPhoenix/index";
import rcPhoenixMobile from "./rcPhoenix/mobile/index";
import avayaCustomized from "./avayaCustomized/index";
import avayaCustomizedMobile from "./avayaCustomized/mobile/index";
import verizonSimple from "./verizonSimple/index";
import verizonSimpleMobile from "./verizonSimple/mobile/index";
import vodafoneBalanced from "./vodafoneBalanced/index";
import vodafoneBalancedMobile from "./vodafoneBalanced/mobile/index";
import rainbowRich from "./rainbowRich/index";
import rainbowRichMobile from "./rainbowRich/mobile/index";
import atosRich from "./atosRich/index";
import atosRichMobile from "./atosRich/mobile/index";
import telusRich from "./telusRich/index";
import telusRichMobile from "./telusRich/mobile/index";
import attRich from "./attRich/index";
import attRichMobile from "./attRich/mobile/index";
import btRich from "./btRich/index";
import btRichMobile from "./btRich/mobile/index";
import eastlinkSimple from "./eastlinkSimple/index";
import eastlinkSimpleMobile from "./eastlinkSimple/mobile/index";
import mcmRich from "./mcmRich/index";
import mcmRichMobile from "./mcmRich/mobile/index";
import ecotelSimple from "./ecotelSimple/index";
import ecotelSimpleMobile from "./ecotelSimple/mobile/index";

type RcThemesIdType = keyof typeof RcThemes;

type RcThemesType = Record<RcThemesIdType, any>;

const RcThemes = {
  rcBlue,
  rcJupiterBlue,
  rcDark,
  rcHighContrast,
  rcPhoenix,
  avayaCustomized,
  verizonSimple,
  vodafoneBalanced,
  rainbowRich,
  atosRich,
  telusRich,
  attRich,
  btRich,
  eastlinkSimple,
  mcmRich,
  ecotelSimple,
};

const RcMobileThemes = {
  rcBlue: rcBlueMobile,
  rcJupiterBlue: rcJupiterBlueMobile,
  rcDark: rcDarkMobile,
  rcHighContrast: rcHighContrastMobile,
  rcPhoenix: rcPhoenixMobile,
  avayaCustomized: avayaCustomizedMobile,
  verizonSimple: verizonSimpleMobile,
  vodafoneBalanced: vodafoneBalancedMobile,
  rainbowRich: rainbowRichMobile,
  atosRich: atosRichMobile,
  telusRich: telusRichMobile,
  attRich: attRichMobile,
  btRich: btRichMobile,
  eastlinkSimple: eastlinkSimpleMobile,
  mcmRich: mcmRichMobile,
  ecotelSimple: ecotelSimpleMobile,
};

const RcThemeIds = Object.keys(RcThemes) as RcThemesIdType[];

export { RcThemeIds, RcThemes, RcMobileThemes, RcThemesIdType, RcThemesType };
