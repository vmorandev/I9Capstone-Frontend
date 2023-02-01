import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import './empSearchbar.css';


const data = [
    {
        key: "1",
        User: "James O'Neal",
        Section1: "Completed",
        FormID: "0001",
        Country: "United States",
        State: "GA",
        City: "Alpharetta",
        Reviewer: "Ana McCarty",
        Hiredate: "2/6/2023",
        Deadline: " ",
        eVerify: ""
    },

];
const EmployerSearchbar = () => {
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
            title: "New Hire",
            dataIndex: "User",
            key: "New Hire",
            width: "15%",
            ...getColumnSearchProps("User"),
        },

        {
            title: "Section 1",
            dataIndex: "sectionStatus1",
            key: "sectionStatus1",
            width: "7%",
            ...getColumnSearchProps("Section 1"),
        },
        {
            title: "Form ID",
            dataIndex: "formID",
            key: "formID",
            width: "8%",
            ...getColumnSearchProps("Form ID"),
        },
        {
            title: "Country",
            dataIndex: "Country",
            key: "Country",
            width: "8%",
            ...getColumnSearchProps("Country"),
        },
        {
            title: "State",
            dataIndex: "State",
            key: "State",
            width: "6%",
            ...getColumnSearchProps("State/Providence"),
        },
        {
            title: "City",
            dataIndex: "City",
            key: "City",
            width: "8%",
            ...getColumnSearchProps("City"),
        },
        {
            title: "E-Verify",
            dataIndex: "eVerify",
            key: "E Verify",
            width: "8%",
            ...getColumnSearchProps("E-Verify Status"),
        },
        {
            title: "Reviewer",
            dataIndex: "Reviewer",
            key: "Reviewer",
            width: "15%",
            ...getColumnSearchProps("Reviewer"),
            sorter: (a, b) => a.Reviewer.length - b.Reviewer.length,
            sortDirections: ["descend", "ascend"],
        },
    ];

    return <Table className="SearchTable" columns={columns} dataSource={data} />;
};

export default EmployerSearchbar;
