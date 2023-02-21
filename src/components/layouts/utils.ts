import {styled} from "@mui/material/styles";
import Box, {BoxProps} from "@mui/material/Box";
import Typography, {TypographyProps} from "@mui/material/Typography";
import Link from "next/link";
import {NextRouter} from "next/router";
import {NavGroup, NavLink} from "../layouts/types";

const BoxWrapper = styled(Box)<BoxProps>(({theme}) => ({
  [theme.breakpoints.down('xl')]: {
    width: '100%'
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 600
  }
}))

const TypographyStyled = styled(Typography)<TypographyProps>(({theme}) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: {mt: theme.spacing(8)}
}))

const LinkStyled = styled(Link)(({theme}) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param item
 * @param activeItem
 */
const handleURLQueries = (router: NextRouter, path: string | undefined): boolean => {
  if (Object.keys(router.query).length && path) {
    const arr = Object.keys(router.query)

    return router.asPath.includes(path) && router.asPath.includes(router.query[arr[0]] as string) && path !== '/'
  }

  return false
}

/**
 * Check if the given item has the given url
 * in one of its children
 *
 * @param item
 * @param currentURL
 */
const hasActiveChild = (item: NavGroup, currentURL: string): boolean => {
  const { children } = item

  if (!children) {
    return false
  }

  for (const child of children) {
    if ((child as NavGroup).children) {
      if (hasActiveChild(child, currentURL)) {
        return true
      }
    }
    const childPath = (child as NavLink).path

    // Check if the child has a link and is active
    if (
      child &&
      childPath &&
      currentURL &&
      (childPath === currentURL || (currentURL.includes(childPath) && childPath !== '/'))
    ) {
      return true
    }
  }

  return false
}

/**
 * Check if this is a children
 * of the given item
 *
 * @param children
 * @param openGroup
 * @param currentActiveGroup
 */
const removeChildren = (children: NavLink[], openGroup: string[], currentActiveGroup: string[]) => {
  children.forEach((child: NavLink) => {
    if (!currentActiveGroup.includes(child.title)) {
      const index = openGroup.indexOf(child.title)
      if (index > -1) openGroup.splice(index, 1)

      // @ts-ignore
      if (child.children) removeChildren(child.children, openGroup, currentActiveGroup)
    }
  })
}


export {
  removeChildren,
  hasActiveChild,
  handleURLQueries,
  LinkStyled,
  BoxWrapper,
  TypographyStyled
}
