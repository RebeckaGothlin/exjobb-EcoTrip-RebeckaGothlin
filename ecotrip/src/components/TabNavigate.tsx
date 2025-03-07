import React from "react";
import { TabButton, TabNavigation } from "./styled/StyledContent";
import { FaMapMarkedAlt, FaKeyboard } from "react-icons/fa";

interface TabNavigationProps {
  activeTab: "map" | "input";
  setActiveTab: (tab: "map" | "input") => void;
}

/**
 * A navigation component for switching between "map" and "input" views.
 *
 * @param {TabNavigationProps} props - The component props.
 * @returns {JSX.Element} - The rendered TabNavigate component.
 */
export const TabNavigate: React.FC<TabNavigationProps> = ({
  activeTab,
  setActiveTab,
}) => (
  <TabNavigation>
    <TabButton
      isActive={activeTab === "map"}
      onClick={() => setActiveTab("map")}
      aria-label="Switch to map view"
    >
      <FaMapMarkedAlt size="25px" title="Map" />
    </TabButton>
    <TabButton
      isActive={activeTab === "input"}
      onClick={() => setActiveTab("input")}
      aria-label="Switch to input view"
    >
      <FaKeyboard size="25px" title="Input" />
    </TabButton>
  </TabNavigation>
);
