import React from "react";

import { iconList } from "./iconList";
import { ReactComponent as Stable } from "./icons/default/stable.svg";
import { ReactComponent as Interest } from "./icons/default/interest.svg";
import { ReactComponent as Growth } from "./icons/default/growth.svg";

const CoinIcon = React.forwardRef(({ symbol, type, ...props }, ref) => {
  if (symbol && (symbol in iconList)) {
    const Icon = iconList[symbol];
    return (
      <Icon width="1em" height="1em" {...props} ref={ref} />
    )
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