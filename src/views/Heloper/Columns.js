import { FormattedMessage } from "react-intl";
import Action from "./Action/EditDelete";
import { delete_user, region_delete, site_delete } from "./Apicall/endPoints";
import { DateFormat } from "./DateFormat";
import PDFModal from "./PDFView/PDFModal";

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
    Header: "TYPE",
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
          <span className=" Black">{row._original?.name}</span>
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
          <span className=" Black">{row._original?.name_ar}</span>
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
            endPoint={region_delete}
            name="region"
            path="/region/update/"
            _id={row._id}
          />
        </div>
      );
    },
  },
];

// Site Columns
export const SiteCol = [
  {
    Header: "Owner Name",
    accessor: "ownerName",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row.ownerName}</span>
        </div>
      );
    },
  },
  {
    Header: "Email",
    accessor: "email",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          <span className=" Black">{row.email}</span>
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
            endPoint={site_delete}
            name="site"
            path="/site/update/"
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
          <span className=" Black">{row._original.user?.name}</span>
        </div>
      );
    },
  },
  {
    Header: "INSPECTOR ADDRESS",
    accessor: "name",
    sortable: false,
    Cell: ({ row }) => {
      return (
        <div>
          {row._original?.site && (
            <span className=" Black">
              {row._original?.site?.region?.name +
                "-" +
                row._original?.site?.city?.name +
                "-" +
                row._original?.site?.streetNameAr}
            </span>
          )}
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
          <span className=" Black">{row._original?.site?.licenseNumber}</span>
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
          <span className="Black">{DateFormat(row._original.created_at)}</span>
        </div>
      );
    },
  },
  {
    Header: "ACTION",
    accessor: "_id",
    sortable: false,
    show: false,
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
  {
    Header: (
      <FormattedMessage id={"Export AS PDF"} defaultMessage="Export as Pdf" />
    ),
    accessor: "_id",
    Cell: ({ row }) => {
      return (
        <div className="d-flex  align-items-center justify-content-center flex-row">
          <div className="d-flex">
            <PDFModal id={row._original._id} />
          </div>
        </div>
      );
    },
    sortable: false,
    excExp: true,
  },
];
