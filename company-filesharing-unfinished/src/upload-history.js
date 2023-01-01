import React from 'react'
import { Icon, Table} from 'semantic-ui-react'


const FeedHistory = () => (
    <Table celled striped>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan='3'>File Repository</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell collapsing>
                    <Icon size='large' name='file code' /> Region Dalarna monthly reports
                </Table.Cell>
                <Table.Cell>Project Manager Approval</Table.Cell>
                <Table.Cell textAlign='right'>12 hours ago</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)
export default FeedHistory