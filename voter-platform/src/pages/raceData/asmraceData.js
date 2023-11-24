import React, {useEffect, useState} from 'react';

import 'devextreme/dist/css/dx.common.css';
import '../../themes/generated/theme.base.css';
import '../../themes/generated/theme.additional.css';
import '../../dx-styles.scss';

import {
  DataGrid,
  Column,
  Editing,
  FilterRow,
  SearchPanel,
  Paging,
  Pager,
  GroupPanel,
  Grouping,
  Export,
  Summary,
  TotalItem,
} from 'devextreme-react/data-grid';

//Add API extensions here
import { fetchRaces } from '../../api/asmraceService';

const columns = [
  "District",
  "Democrat",
  "IAP",
  "LP",
  "NoParty",
  "Other",
  "Republican",
  "ConsVote",
  "ProgVote",
  "RDReg",
  "CPVote",
  "TotalVote",
  "EstCONSBase",
  "RQDPctofIND",
  "TotOTHVotes",
  "ReqOTHtoWin",
  "EstOTHVotes",
  "REPIncumbent",
  "DEMIncumbent",

  // ... add other columns here
];

export default function AsmRaceData() {
  const [voters, setRaces] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRaces()
        .then((data) => {
          setRaces(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
          console.error("An error occurred while fetching race data:", error);
        });
  }, []);

  //Loading conditions
  if (loading) return <div>Loading...</div>;

  //Error conditions
  if (error) return <div>An error occurred while fetching race data. Please try again later.</div>;

  return (
      <div className="App">
        <input/>

        <DataGrid
            rowAlternationEnabled={true}            
            allowSorting={true}
            allowColumnResizing={true}
            allowColumnReordering={true}
            columnAutoWidth={true}
            dataSource={voters}
            keyExpr="District"
            sortMode="multiple"
        >

          <Export enabled={true} />
          <Grouping autoExpandAll={false} />
          <GroupPanel visible={true} />
          <Paging defaultPageSize={10} />
          <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 20]} />
          {columns.map((field) => (
              <Column dataField={field} key={field} alignment="left" />
          ))}
          <FilterRow visible={true} />
          <SearchPanel visible={true} />
          <Editing
              mode="popup"
              allowUpdating={true}
              allowDeleting={true}
              allowAdding={true}
          />
          <Summary>
            <TotalItem column="TotalVotes" summaryType="sum" />
          </Summary>
        </DataGrid>
      </div>
  );
}
