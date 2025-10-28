# Case Study 2: Employee Role Distribution (Ant Design + Pie Chart + CRUD)

## Objective

Build a complete CRUD module for Employees, with analytics showing role distribution in a Pie Chart using Ant Design, Redux Toolkit, Axios, and Recharts.

---

## Architecture Flow

AntD Form + Table → Redux Slice (Employee CRUD) → Axios / JSON Server → Pie Chart Analytics

---

## Folder Structure

```
src/
├── api/
│   └── client.js
├── app/
│   └── store.js
├── features/
│   └── employees/
│       ├── employeesSlice.js
│       ├── EmployeePage.jsx
│       ├── EmployeeForm.jsx
│       └── EmployeePieChart.jsx
```

---

## Step 1: Mock Data (data.json)

```json
{
  "employees": [
    { "id": 1, "name": "Anita Sharma", "role": "Developer", "salary": 80000 },
    { "id": 2, "name": "Ravi Patel", "role": "Manager", "salary": 120000 },
    { "id": 3, "name": "Sneha Gupta", "role": "QA", "salary": 70000 },
    { "id": 4, "name": "Vikas Rao", "role": "Developer", "salary": 85000 }
  ]
}
```

Run JSON Server:

```
json-server --watch data.json --port 5000
```

---

## Step 2: Redux Slice (employeesSlice.js)

```jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/client";

export const fetchEmployees = createAsyncThunk("employees/fetch", async () => {
  const res = await client.get("/employees");
  return res.data;
});

export const addEmployee = createAsyncThunk("employees/add", async (emp) => {
  const res = await client.post("/employees", emp);
  return res.data;
});

export const deleteEmployee = createAsyncThunk(
  "employees/delete",
  async (id) => {
    await client.delete(`/employees/${id}`);
    return id;
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState: { list: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (s, a) => {
        s.list = a.payload;
      })
      .addCase(addEmployee.fulfilled, (s, a) => {
        s.list.push(a.payload);
      })
      .addCase(deleteEmployee.fulfilled, (s, a) => {
        s.list = s.list.filter((e) => e.id !== a.payload);
      });
  },
});

export default employeesSlice.reducer;
```

---

## Step 3: Employee Page (EmployeePage.jsx)

```jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, deleteEmployee } from "./employeesSlice";
import { Table, Button, Popconfirm, Space, message } from "antd";
import EmployeeForm from "./EmployeeForm";
import EmployeePieChart from "./EmployeePieChart";

const EmployeePage = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((s) => s.employees);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
    message.success("Employee deleted");
  };

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Role", dataIndex: "role" },
    { title: "Salary", dataIndex: "salary" },
    {
      title: "Action",
      render: (_, r) => (
        <Popconfirm
          title="Delete employee?"
          onConfirm={() => handleDelete(r.id)}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Button type="primary" onClick={() => setOpen(true)}>
        Add Employee
      </Button>
      <Table
        rowKey="id"
        dataSource={list}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
      <EmployeeForm open={open} onClose={() => setOpen(false)} />
      <EmployeePieChart data={list} />
    </Space>
  );
};

export default EmployeePage;
```

---

## Step 4: Employee Form (EmployeeForm.jsx)

```jsx
import React from "react";
import { Modal, Form, Input, Select, Button, InputNumber, message } from "antd";
import { useDispatch } from "react-redux";
import { addEmployee } from "./employeesSlice";

const roles = ["Developer", "Manager", "QA", "Designer", "Support"];

const EmployeeForm = ({ open, onClose }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(addEmployee(values));
    message.success("Employee added");
    form.resetFields();
    onClose();
  };

  return (
    <Modal title="Add Employee" open={open} onCancel={onClose} footer={null}>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Role" name="role" rules={[{ required: true }]}>
          <Select options={roles.map((r) => ({ value: r, label: r }))} />
        </Form.Item>
        <Form.Item label="Salary" name="salary" rules={[{ required: true }]}>
          <InputNumber min={30000} style={{ width: "100%" }} />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Form>
    </Modal>
  );
};

export default EmployeeForm;
```

---

## Step 5: EmployeePieChart.jsx

```jsx
import React from "react";
import { Card } from "antd";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#1677ff", "#52c41a", "#faad14", "#eb2f96", "#13c2c2"];

const EmployeePieChart = ({ data }) => {
  const roleCount = data.reduce((acc, e) => {
    acc[e.role] = (acc[e.role] || 0) + 1;
    return acc;
  }, {});
  const chartData = Object.entries(roleCount).map(([role, count]) => ({
    role,
    count,
  }));

  return (
    <Card title="Employee Role Distribution">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="role"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default EmployeePieChart;
```

---

## Step 6: Integration

```jsx
import EmployeePage from "./features/employees/EmployeePage";

function App() {
  return <EmployeePage />;
}

export default App;
```

---

## Step 7: Run Commands

```
npm run server   # starts JSON server
npm run dev      # starts Vite React app
```

---

## Observations

1. Reused Ant Design’s Form, Table, and Modal structure for CRUD to maintain consistency and speed up development.
2. The Pie Chart automatically re-renders on CRUD operations because it’s driven by the Redux state (`employees.list`).
3. Ant Design’s declarative form validation and theming ensure a polished, enterprise-ready UI.
4. Recharts offers a responsive visualization layer that adjusts automatically to data changes.
5. JSON Server enables real-time mock APIs for rapid local development.
6. The architecture is modular, clean, and ready to scale for multiple entities or dashboards.

---

## Code Explanation

**employeesSlice.js**

- Manages CRUD operations and application state using Redux Toolkit.
- `createAsyncThunk` handles async API calls; `extraReducers` updates store when requests complete.
- Ensures clean, predictable state transitions for fetch, add, and delete.

**EmployeePage.jsx**

- Core UI container combining CRUD operations and analytics.
- Loads data using Redux `fetchEmployees`.
- Displays AntD `Table` with `Popconfirm` for safe deletion and integrates the form + chart.

**EmployeeForm.jsx**

- AntD modal-based form using controlled components (`Input`, `Select`, `InputNumber`).
- Dispatches `addEmployee` on submit and resets form after success.
- Reuses roles array for dynamic dropdown binding.

**EmployeePieChart.jsx**

- Uses Recharts `PieChart` to display data grouped by role.
- Data transformation is done using JavaScript `reduce()` and `map()`.
- Colors auto-cycle through a predefined palette to ensure readability.
- Fully responsive, re-rendering on state change.

**client.js**

```jsx
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

export default client;
```

Centralizes Axios configuration to maintain a single source of truth for API endpoints.

**store.js**

```jsx
import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/employees/employeesSlice";

export const store = configureStore({
  reducer: { employees: employeesReducer },
});
```

Initializes the Redux store and makes it available app-wide.

---

## Execution Flow

1. JSON Server runs as a local REST API (`http://localhost:5000/employees`).
2. React app starts via Vite.
3. Redux fetches initial data using Axios client.
4. EmployeePage displays the table with data.
5. On “Add Employee,” a modal opens; submitting dispatches Redux actions.
6. After insertion or deletion, both Table and Pie Chart auto-update through state reactivity.

---
