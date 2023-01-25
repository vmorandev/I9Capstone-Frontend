import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import './SearchBar.css';

const data = [
  {
    key: "1",
    user: "James O'Neal",
    activity: "Started I-9 form",
    formID: "0001",
    formStatus: "Incomplete",
    country: "United States",
    state: "GA",
    city: "Alpharetta",
    reviewer: "Ana McCarty",
  },
  {
    key: "2",
    user: "Juan Cambell",
    activity: "completed I-9 section 2",
    formID: "0001",
    formStatus: "Incomplete",
    country: "United States",
    state: "GA",
    city: "Alpharetta",
    reviewer: "Ana McCarty",
  },
  {
    key: "3",
    user: "Ana McCarty",
    activity: "E-signed Review",
    formID: "0001",
    formStatus: "Complete",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    reviewer: "N/A",
  },
];
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#998bc0",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      width: "10%",
      ...getColumnSearchProps("user"),
    },

    {
      title: "Activity",
      dataIndex: "activity",
      key: "activity",
      width: "14%",
      ...getColumnSearchProps("activity"),
    },
    {
      title: "Form ID",
      dataIndex: "formID",
      key: "formID",
      width: "7%",
      ...getColumnSearchProps("Form ID"),
    },
    {
      title: "Form Status",
      dataIndex: "formStatus",
      key: "formStatus",
      width: "7%",
      ...getColumnSearchProps("Form Status"),
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      width: "8%",
      ...getColumnSearchProps("Country"),
    },
    {
      title: "State/Providence",
      dataIndex: "state",
      key: "state",
      width: "10%",
      ...getColumnSearchProps("State/Providence"),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      width: "8%",
      ...getColumnSearchProps("City"),
    },
    {
      title: "Reviewer",
      dataIndex: "reviewer",
      key: "reviewer",
      width: "15%",
      ...getColumnSearchProps("Reviewer"),
      sorter: (a, b) => a.reviewer.length - b.reviewer.length,
      sortDirections: ["descend", "ascend"],
    },
  ];
  return <Table className="SearchTable" columns={columns} dataSource={data} />;
};
export default SearchBar;
