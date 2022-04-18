import Action from "./Action/EditDelete";
import { delete_user } from "./Apicall/endPoints";

export const userCol = [
  {
    Header: "NAME",
    accessor: "name",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row._original?.name}</span>
        </div>
      );
    },
  },
  {
    Header: "FATHER NAME",
    accessor: "father_name",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row._original?.fatherName}</span>
        </div>
      );
    },
  },

  {
    Header: "FAMILY NAME",
    accessor: "family_name",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row._original?.familyName}</span>
        </div>
      );
    },
  },
  {
    Header: "EMAIL",
    accessor: "email",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row._original?.email}</span>
        </div>
      );
    },
  },
  {
    Header: "Type",
    accessor: "type",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row._original.type}</span>
        </div>
      );
    },
  },
  {
    Header: "ACTION",
    accessor: "_id",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <Action
            editOp={true}
            deleteOp={true}
            endPoint={delete_user}
            name="user"
            path="/user/update/"
            _id={row._id}
          />
        </div>
      );
    },
  },
];
//region list column
export const regionCol = [
  {
    Header: "NAME(en)",
    accessor: "name",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row.name}</span>
        </div>
      );
    },
  },
  {
    Header: "NAME(Ar)",
    accessor: "father_name",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row.name}</span>
        </div>
      );
    },
  },
  {
    Header: "ACTION",
    accessor: "_id",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <Action
            editOp={true}
            deleteOp={true}
            endPoint={delete_user}
            name="region"
            path="/region/update/"
            _id={row._id}
          />
        </div>
      );
    },
  },
];
//field survey columns
export const fieldSurveyCol = [
  {
    Header: "INSPECTOR NAME",
    accessor: "name",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row.name}</span>
        </div>
      );
    },
  },
  {
    Header: "INSPECTOR ADDRESS",
    accessor: "address",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row.name}</span>
        </div>
      );
    },
  },
  {
    Header: "TOURISM LICENSE NUMBER",
    accessor: "number",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row.name}</span>
        </div>
      );
    },
  },
  {
    Header: "SUBMISSION AT",
    accessor: "create_at",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row.name}</span>
        </div>
      );
    },
  },
  {
    Header: "ACTION",
    accessor: "_id",
    sortable: false,
  },
];
