import React, { useState } from 'react';
import * as math from 'mathjs';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function CalculatorApp() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    // ボタンが押された時の処理を記述する関数
    const handleButtonClick = (value) => {
        // ここにコードを書く (ヒント: 入力値の更新)
        setInput(input + value);
    };

    // 計算結果を表示する関数
    const calculateResult = () => {
        // 数式の開始が不適切な場合（数字または演算子でない場合）
        if (!input.match(/^[0-9+-/*]/)) {
            setResult("error");
            return;
        }

        try {
            const result = math.evaluate(input);
            setResult(String(result));
        } catch (e) {
            setResult("error");
        }
    };

    // 入力値をクリアする関数
    const clearInput = () => {
        // ここにコードを書く (ヒント: ステートのリセット)
        setInput("");
        setResult("");
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#bf42f5',
            },
        },
    });

    return (
        <Box sx={{ maxWidth: 300, margin: 'auto' }}>
            <TextField
                value={input}
                onChange={(e) => setInput(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                label="数式"
            />
            <TextField
                value={result}
                margin="normal"
                fullWidth
                variant="outlined"
                label="結果"
                InputProps={{
                    readOnly: true,
                }}
            />

            <Box sx={{ maxWidth: 300, margin: 'auto' }}>
                <Grid container spacing={1}>
                    {/* 1行目 */}
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("1")}>1</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("2")}>2</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("3")}>3</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("+")}>+</Button>
                    </Grid>

                    {/* 2行目 */}
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("4")}>4</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("5")}>5</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("6")}>6</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("-")}>-</Button>
                    </Grid>

                    {/* 3行目 */}
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("7")}>7</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("8")}>8</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("9")}>9</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("*")}>×</Button>
                    </Grid>

                    {/* 4行目 */}
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("0")}>0</Button>
                    </Grid>

                    <ThemeProvider theme={theme}>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={calculateResult}>=</Button>
                        </Grid>
                    </ThemeProvider>

                    <Grid item xs={3}>
                        <Button variant="contained" onClick={clearInput}>C</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={() => handleButtonClick("/")}>÷</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );

}

export default CalculatorApp;