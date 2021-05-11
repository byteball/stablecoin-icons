import React from "react";

import { iconList } from "./iconList";
import { ReactComponent as Stable } from "./icons/default/stable.svg";
import { ReactComponent as Interest } from "./icons/default/interest.svg";
import { ReactComponent as Growth } from "./icons/default/growth.svg";

const CoinIcon = React.forwardRef(({ symbol, type, pegged, ...props }, ref) => {
  if (symbol && Object.keys(iconList).find((item) => symbol in iconList[item])) {
    const currentPegged = Object.keys(iconList).find((item) => symbol in iconList[item]);
    if (currentPegged && iconList[currentPegged][symbol]) {
      const Icon = iconList[currentPegged][symbol];
      return (
        <Icon width="1em" height="1em" {...props} ref={ref} />
      )
    } else {
      return <Interest width="1em" height="1em" {...props} ref={ref} />
    }
  } if (type && pegged && (pegged in iconList)) {
    const symbol = Object.keys(iconList[pegged])[type - 1]
    const Icon = iconList[pegged][symbol];
    return <Icon width="1em" height="1em" {...props} ref={ref} />
  } else {
    if (type === 1) {
      return <Growth width="1em" height="1em" {...props} ref={ref} />
    } else if (type === 2) {
      return <Interest width="1em" height="1em" {...props} ref={ref} />
    } else if (type === 3) {
      return <Stable width="1em" height="1em" {...props} ref={ref} />
    } else {
      return <Interest width="1em" height="1em" {...props} ref={ref} />
    }
  }
});

export default CoinIcon;