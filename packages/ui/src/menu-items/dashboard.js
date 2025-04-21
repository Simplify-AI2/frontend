// assets
import {
    IconUsersGroup,
    IconHierarchy,
    IconBuildingStore,
    IconKey,
    IconTool,
    IconLock,
    IconRobot,
    IconVariable,
    IconFiles
} from '@tabler/icons-react'

// constant
const icons = { IconUsersGroup, IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot, IconVariable, IconFiles }

import { IconMessageCircleUser } from '@tabler/icons-react'
import { IconPasswordUser } from '@tabler/icons-react'
//import { IconRobotFace } from '@tabler/icons-react'

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'chatflows',
            title: 'Chat AI',
            type: 'item',
            url: '/conversations',
            //icon: icons.IconHierarchy,
            icon: IconMessageCircleUser,
            breadcrumbs: true
        },
        {
            id: 'agentflows',
            title: 'Agentic AI',
            type: 'item',
            url: '/automations',
            icon: icons.IconUsersGroup,
            breadcrumbs: true,
            //isBeta: true
            isBeta: false
        },
        {
            id: 'assistants',
            title: 'Virtual Assistants',
            type: 'item',
            url: '/virtual-assistants',
            icon: icons.IconRobot,
            //icon: icons.IconRobotFace,
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: 'Marketplaces',
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'tools',
            title: 'Custom Tools',
            type: 'item',
            url: '/custom-tools',
            icon: icons.IconTool,
            breadcrumbs: true
        },
        {
            id: 'credentials',
            title: 'Credentials',
            type: 'item',
            url: '/credentials',
            //icon: icons.IconLock,
            icon: IconPasswordUser,
            breadcrumbs: true
        },
        {
            id: 'variables',
            title: 'System Variables',
            type: 'item',
            url: '/system-variables',
            icon: icons.IconVariable,
            breadcrumbs: true
        },
        {
            id: 'apikey',
            title: 'API',
            type: 'item',
            url: '/api',
            icon: icons.IconKey,
            breadcrumbs: true
        },
        {
            id: 'document-stores',
            title: 'Knowledge Base',
            type: 'item',
            url: '/knowledge-base',
            icon: icons.IconFiles,
            breadcrumbs: true
        }
    ]
}

export default dashboard
