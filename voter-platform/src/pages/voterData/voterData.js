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
import { fetchVoters } from '../../api/voterService';

const columns = [
  "CountyID",
  "StateID",
  "Status",
  "County",
  "Precinct",
  "CongDist",
  "AssmDist",
  "BrdofEd",
  "Regent",
  "CntyComm",
  "Rwards",
  "Swards",
  "SchBdTrust",
  "SchBdAtLrg",
  "First",
  "Last",
  "Middle",
  "Suffix",
  "Phone",
  "email",
  "BirthDate",
  "RegDate",
  "Party",
  "StreetNo",
  "StreetName",
  "Address1",
  "Address2",
  "City",
  "State",
  "Zip",
  "RegisteredDays",
  "Age",
  "TotalVotes",
  "Generals",
  "Primaries",
  "Polls",
  "Absentee",
  "Early",
  "Provisional",
  "LikelytoVote",
  "Score",



  // ... add other columns here
];

export default function VoterData() {
  const [voters, setVoters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVoters()
        .then((data) => {
          setVoters(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
          console.error("An error occurred while fetching data:", error);
        });
  }, []);

  //Loading conditions
  if (loading) return <div>Loading...</div>;

  //Error conditions
  if (error) return <div>An error occurred while fetching data. Please try again later.</div>;

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
            keyExpr="StateID"
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
