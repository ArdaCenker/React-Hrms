import React from "react";
import { Menu } from 'semantic-ui-react';
import CitiesList from "../components/FilterSection/CitiesList";
import JobTitlesList from "../components/FilterSection/JobTitlesList";
import JobAdvertisementFilter from "../components/FilterSection/JobAdvertisementFilter";
import "./csses/filter.css"

export default function Filters() {

  return (
    <div>
      <Menu vertical >
        <Menu.Item className="filter">
        <CitiesList></CitiesList>
        </Menu.Item>
        <Menu.Item className="filter">
        <JobTitlesList></JobTitlesList>
        </Menu.Item>
        <Menu.Item  className="filter">
         <JobAdvertisementFilter></JobAdvertisementFilter>
        </Menu.Item>
      </Menu>
    </div>
  );
}