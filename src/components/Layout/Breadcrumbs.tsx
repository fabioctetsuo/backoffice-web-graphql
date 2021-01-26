import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import BreadcrumbsMaterial from '@material-ui/core/Breadcrumbs';
import TypographyMaterial from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Typography = styled(TypographyMaterial)`
  cursor: pointer;
`;

const Container = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export type PathProps = {
  label: string;
  link?: string;
};

type BreadcrumbsProps = {
  path: PathProps[];
};

const Breadcrumbs = ({ path }: BreadcrumbsProps) => {
  return (
    <Container>
      <BreadcrumbsMaterial
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        {path.map(({ label, link }) => {
          if (!link) {
            return (
              <Typography key={`path-${label}`} color="textPrimary">
                {label}
              </Typography>
            );
          }

          return (
            <Link key={`path-${label}`} href={link}>
              <Typography color="inherit">{label}</Typography>
            </Link>
          );
        })}
      </BreadcrumbsMaterial>
    </Container>
  );
};

export default Breadcrumbs;
