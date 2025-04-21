import { createPortal } from 'react-dom'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogContent, DialogTitle, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import moment from 'moment'
import axios from 'axios'
import { baseURL } from '@/store/constant'

const AboutDialog = ({ show, onCancel }) => {
    const portalElement = document.getElementById('portal')

    const [data, setData] = useState({})

    useEffect(() => {
        if (show) {
            const username = localStorage.getItem('username')
            const password = localStorage.getItem('password')

            const config = {}
            if (username && password) {
                config.auth = {
                    username,
                    password
                }
                config.headers = {
                    'Content-type': 'application/json',
                    'x-request-from': 'internal'
                }
            }
            const latestReleaseReq = axios.get('https://api.github.com/repos/FlowiseAI/Flowise/releases/latest')
            const currentVersionReq = axios.get(`${baseURL}/api/v1/version`, { ...config })

            Promise.all([latestReleaseReq, currentVersionReq])
                .then(([latestReleaseData, currentVersionData]) => {
                    const finalData = {
                        ...latestReleaseData.data,
                        currentVersion: currentVersionData.data.version
                    }
                    setData(finalData)
                })
                .catch((error) => {
                    console.error('Error fetching data:', error)
                })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show])

    const component = show ? (
        <Dialog
            onClose={onCancel}
            open={show}
            fullWidth
            maxWidth='sm'
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                SimplifyAI: Making Smart Automation Easier with Generative AI
            </DialogTitle>
            <DialogContent>
                {data && (
                    <TableContainer component={Paper}>
                        <Table aria-label='simple table'>
                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component='th' scope='row'>
                                        SimplifyAI is all about making smart automation simple. We&apos;ve built a platform that lets
                                        quickly create chatbots and AI helpers using the cool tech of generative AI – like those big
                                        language models you hear about. <p></p>Think of it as a no-code/low-code way to get AI working for you,
                                        without needing to be a coding whiz. <p></p>Current version: SimplifyAI v1.0
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </DialogContent>
        </Dialog>
    ) : null

    return createPortal(component, portalElement)
}

AboutDialog.propTypes = {
    show: PropTypes.bool,
    onCancel: PropTypes.func
}

export default AboutDialog
