// ** Vertical Menu Components
import VerticalNavMenuLink from "./VerticalNavMenuLink";
import VerticalNavMenuGroup from "./VerticalNavMenuGroup";
import VerticalNavMenuSectionHeader from "./VerticalNavMenuSectionHeader";

// ** Utils
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from "@layouts/utils";
import { hasRule } from "../../../../../views/Heloper/HasRule";

const VerticalMenuNavItems = (props) => {
  // ** Components Object
  const Components = {
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
    VerticalNavMenuSectionHeader,
  };

  // ** Render Nav Menu Items
  const RenderNavItems = props.items.map((item, index) => {
    // const TagName = Components[resolveNavItemComponent(item)];
    // if (item.children) {
    //   return canViewMenuGroup(item) && <TagName item={item} index={index} key={item.id} {...props} />
    // }
    // return <TagName key={index} item={item} {...props} />;
    const user = item?.permissions?.filter((per) => per === hasRule());
    if (user?.length > 0) {
      const TagName = Components[resolveNavItemComponent(item)];
      return <TagName key={index} item={item} {...props} />;
    } else {
      return null;
    }
  });

  return RenderNavItems;
};

export default VerticalMenuNavItems;
