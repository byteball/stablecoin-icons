# [React] Bonded stablecoin Icons

Link to bonded stablecoins: [ostable.org](https://ostable.org)

Link to token registry: [tokens.ooo](https://tokens.ooo/)

## Install
``npm i stablecoin-icons``

## Use
``import Icon from "stablecoin-icons"``

## Required packages:
 - react

## Props*

| Props name | Type | Descriprion |
| ------ | ------ | ------ |
| symbol | string | Token name |
| type | number | 1 - for growth; 2 - for interest; 3 - for stable |

This component support all SVG props

 
## Example

```js 
import Icon from "stablecoin-icons" 

export const App = () => {
  return <Icon symbol="IUSD" type={2} />
}
```
## How do I add an icon for my stablecoin ?

- Go to the [template](https://www.figma.com/file/hE06ZP7Dsj9SVJycPlhomc/template?node-id=0%3A1) on figma and log in
- Click on the "Duplicate to your drafts"
- Go to your to drafts and select template
- Add a logo like this, what is your coin associated with (in the center of the circle, as in other icons) and save it as svg 
- Create a folder "src/icons/[pegged name (for example, BTC or ETH)]". Save and  move your icons there. The icon names must match the token name.
- Remove the height and width attributes in your SVG tags
- Import and add your icons to "src/iconList" as done with others
- Great, you did it! (After your PR is approved, a new version of the library will be released)

If you need help with this, write to @Taump on [Obyte Discord](https://discord.obyte.org/)