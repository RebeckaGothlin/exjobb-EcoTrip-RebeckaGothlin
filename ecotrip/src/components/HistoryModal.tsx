import React from "react";
import {
  ModalContainer,
  ModalOverlay,
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
  StyledTableHeaderCell,
  StyledTableDataCell,
  CloseModalButton,
  
} from "../components/styled/StyledContent";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Search } from "../models/types";
import { HistoryDeleteButton } from "./styled/StyledButtons";

interface HistoryModalProps {
  savedSearches: Search[];
  onClose: () => void;
  onClearHistory: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  savedSearches,
  onClose,
  onClearHistory,
}) => (
  <ModalOverlay onClick={onClose}>
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <CloseModalButton onClick={onClose} aria-label="Close saved searches modal">
        <IoClose size="35px" title="Close" />
      </CloseModalButton>
      {savedSearches.length > 0 ? (
        <StyledTable>
          <StyledTableHeader>
            <StyledTableRow>
              <StyledTableHeaderCell>Time</StyledTableHeaderCell>
              <StyledTableHeaderCell>From</StyledTableHeaderCell>
              <StyledTableHeaderCell>To</StyledTableHeaderCell>
              <StyledTableHeaderCell>Distance</StyledTableHeaderCell>
              <StyledTableHeaderCell>Emissions</StyledTableHeaderCell>
            </StyledTableRow>
          </StyledTableHeader>
          <tbody>
            {savedSearches.map((search, index) => (
              <StyledTableRow key={index}>
                <StyledTableDataCell>{search.time}</StyledTableDataCell>
                <StyledTableDataCell>{search.from}</StyledTableDataCell>
                <StyledTableDataCell>{search.to}</StyledTableDataCell>
                <StyledTableDataCell>{search.result}</StyledTableDataCell>
                <StyledTableDataCell>
                  {search.data.map(
                    (item) => `${item.name}: ${item.emissions.toFixed(0)} kg`
                  ).join(", ")}
                </StyledTableDataCell>
              </StyledTableRow>
            ))}
          </tbody>
        </StyledTable>
      ) : (
        <p>No saved searches found.</p>
      )}
      <HistoryDeleteButton onClick={onClearHistory} aria-label="Clear search history">
        <MdDelete size="25px" title="Delete searches" />
      </HistoryDeleteButton>
    </ModalContainer>
  </ModalOverlay>
);
