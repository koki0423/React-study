import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, jaJP } from '@mui/x-data-grid';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        text: '',
        completed: false,
        dateAdded: '',
        deadline: '',
    });



    const addTask = () => {
        if (!newTask.text) return;
        setTasks([
            ...tasks,
            {
                ...newTask,
                dateAdded: new Date().toLocaleTimeString(jaJP),
                id: tasks.length + 1, // 簡易的な一意のIDを生成
            }
        ]);
        setNewTask({ text: '', completed: false, dateAdded: '', deadline: '' });
    };

    //field idは一意でないといけない
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'completed',
            headerName: '完了',
            type: 'boolean',
            width: 110,
            editable: true,
        },
        {
            field: 'text',
            headerName: 'タスク',
            width: 300,
            editable: true,
        },
        {
            field: 'dateAdded',
            headerName: '追加日',
            width: 150,
            editable: true,
        },
        {
            field: 'deadline',
            headerName: '期限',
            width: 150,
            editable: true,
        },
        {
            field: 'delete',
            headerName: '削除',
            width: 150,
            editable: true,
            // ここに削除ボタンのレンダリングロジックを追加する
            renderCell: (params) => (
                <IconButton onClick={() => removeTask(params.row.id)}>
                    <DeleteIcon />
                </IconButton>
            ),
        },

    ];

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, idx) => idx !== index);
        setTasks(newTasks);
    };

    return (
        <Box sx={{ maxWidth: 1000, margin: 'auto' }}>
            <TextField
                value={newTask.text}
                onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
                fullWidth
                margin='normal'
                variant='outlined'
                label='Task'
            />
            <TextField
                value={newTask.deadline}
                onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                fullWidth
                margin='normal'
                variant='outlined'
                label='Deadline'
            />
            <Button variant='contained' onClick={addTask}>追加</Button>

            <div style={{ height: 400, width: '100%', margin: 'auto' }}>
                <DataGrid
                    rows={tasks.map((task, index) => ({ ...task, id: index }))}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </Box>
    );
}

export default ToDoList;