import NotCollapsedHeader from "./NotCollapsedHeader";
import CollapsedHeader from "./CollapsedHeader";
import { Fragment, useEffect } from "react";
import { useHeaderStore } from "../store";
import { createBreakpoint } from "react-use";

export default function Header() {
  const useBreakpoint = createBreakpoint({ collapseHeader: 680, notCollapseHeader: 681 });
  const breakpoint = useBreakpoint();
  const closeMenu = useHeaderStore(state => state.closeMenu);
  const menuIsOpen = useHeaderStore(state => state.menuIsOpen);

  useEffect(() => {
    if (breakpoint == 'notCollapseHeader' && menuIsOpen) closeMenu();
  }, [breakpoint]);

  useEffect(() => {
    if (menuIsOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    return () => document.body.style.overflow = 'unset';
  }, [menuIsOpen]);

  return (
    <Fragment>
      <CollapsedHeader /> 
      <NotCollapsedHeader />
    </Fragment>
  );
};