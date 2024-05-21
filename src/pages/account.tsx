import React from 'react'
import Layout from "../components/layout";
import { PageProps, Link } from 'gatsby';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

const AccountPage: React.FC<PageProps> = () => {
  const { user } = useAuth0();

  return (
    <Layout>
      <h1>Account Page</h1>
      <p>Email: {user?.email}</p>
    </Layout>
  )
}

export default withAuthenticationRequired(AccountPage);
