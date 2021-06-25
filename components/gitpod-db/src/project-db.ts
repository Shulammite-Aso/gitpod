/**
 * Copyright (c) 2021 Gitpod GmbH. All rights reserved.
 * Licensed under the Gitpod Enterprise Source Code License,
 * See License.enterprise.txt in the project root folder.
 */

import { Project } from "@gitpod/gitpod-protocol";

export const ProjectDB = Symbol('ProjectDB');
export interface ProjectDB {
    findProjectById(projectId: string): Promise<Project | undefined>;
    findProjectByCloneUrl(cloneUrl: string): Promise<Project | undefined>;
    findProjectsByTeam(teamId: string): Promise<Project[]>;
    findProjectByInstallationId(installationId: string): Promise<Project | undefined>;
    createProject(name: string, cloneUrl: string, teamId: string, appInstallationId: string): Promise<Project>;
    setProjectConfiguration(projectId: string, config: string): Promise<void>;
}