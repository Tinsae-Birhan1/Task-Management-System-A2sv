const taskPaths = {
  '/tasks': {
    post: {
      summary: 'Create a new task',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                  example: 'Task Title',
                },
                description: {
                  type: 'string',
                  example: 'Task Description',
                },
                dueDate: {
                  type: 'string',
                  format: 'date-time',
                  example: '2024-04-30T12:00:00Z',
                },
                status: {
                  type: 'string',
                  enum: ['To Do', 'In Progress', 'Done'],
                  example: 'To Do',
                },
                priority: {
                  type: 'string',
                  enum: ['Low', 'Medium', 'High'],
                  example: 'Medium',
                },
                labels: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                  example: ['label1', 'label2'],
                },
                projectId: {
                  type: 'string',
                  example: 'projectId123',
                },
                assignedTo: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                  example: ['userId123', 'userId456'],
                },
              },
            },
          },
        },
      },
      responses: {
        '201': {
          description: 'Task created successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Task created successfully',
                  },
                  task: {
                    type: 'object',
                    properties: {
                      _id: {
                        type: 'string',
                      },
                      title: {
                        type: 'string',
                      },
                      description: {
                        type: 'string',
                      },
                      dueDate: {
                        type: 'string',
                        format: 'date-time',
                      },
                      status: {
                        type: 'string',
                        enum: ['To Do', 'In Progress', 'Done'],
                      },
                      priority: {
                        type: 'string',
                        enum: ['Low', 'Medium', 'High'],
                      },
                      labels: {
                        type: 'array',
                        items: {
                          type: 'string',
                        },
                      },
                      projectId: {
                        type: 'string',
                      },
                      assignedTo: {
                        type: 'array',
                        items: {
                          type: 'string',
                        },
                      },
                      createdAt: {
                        type: 'string',
                        format: 'date-time',
                      },
                      updatedAt: {
                        type: 'string',
                        format: 'date-time',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        '400': {
          description: 'Bad request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Bad request. Missing or invalid parameters.',
                  },
                },
              },
            },
          },
        },
        '500': {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Internal Server Error',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/tasks/{id}': {
    get: {
      summary: 'Get task by ID',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: {
            type: 'string',
          },
          description: 'Task ID',
        },
      ],
      responses: {
        '200': {
          description: 'Task found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  task: {
                    type: 'object',
                    properties: {
                      _id: {
                        type: 'string',
                      },
                      title: {
                        type: 'string',
                      },
                      description: {
                        type: 'string',
                      },
                      dueDate: {
                        type: 'string',
                        format: 'date-time',
                      },
                      status: {
                        type: 'string',
                        enum: ['To Do', 'In Progress', 'Done'],
                      },
                      priority: {
                        type: 'string',
                        enum: ['Low', 'Medium', 'High'],
                      },
                      labels: {
                        type: 'array',
                        items: {
                          type: 'string',
                        },
                      },
                      projectId: {
                        type: 'string',
                      },
                      assignedTo: {
                        type: 'array',
                        items: {
                          type: 'string',
                        },
                      },
                      createdAt: {
                        type: 'string',
                        format: 'date-time',
                      },
                      updatedAt: {
                        type: 'string',
                        format: 'date-time',
                      },
                    },
                  },
                },
              },
            },
          },
        },
        '404': {
          description: 'Task not found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Task not found',
                  },
                },
              },
            },
          },
        },
        '500': {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Internal Server Error',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/tasks/{id}': {
      get: {
        summary: 'Get task by ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'Task ID',
          },
        ],
        responses: {
          '200': {
            description: 'Task found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    task: {
                      type: 'object',
                      properties: {
                        _id: {
                          type: 'string',
                        },
                        title: {
                          type: 'string',
                        },
                        description: {
                          type: 'string',
                        },
                        dueDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        status: {
                          type: 'string',
                          enum: ['To Do', 'In Progress', 'Done'],
                        },
                        priority: {
                          type: 'string',
                          enum: ['Low', 'Medium', 'High'],
                        },
                        labels: {
                          type: 'array',
                          items: {
                            type: 'string',
                          },
                        },
                        projectId: {
                          type: 'string',
                        },
                        assignedTo: {
                          type: 'array',
                          items: {
                            type: 'string',
                          },
                        },
                        createdAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        updatedAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Task not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Task not found',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Internal Server Error',
                    },
                  },
                },
              },
            },
          },
        },
      },
      put: {
        summary: 'Update task by ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'Task ID',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    example: 'Updated Task Title',
                  },
                  description: {
                    type: 'string',
                    example: 'Updated Task Description',
                  },
                  dueDate: {
                    type: 'string',
                    format: 'date-time',
                    example: '2024-04-30T12:00:00Z',
                  },
                  status: {
                    type: 'string',
                    enum: ['To Do', 'In Progress', 'Done'],
                    example: 'In Progress',
                  },
                  priority: {
                    type: 'string',
                    enum: ['Low', 'Medium', 'High'],
                    example: 'High',
                  },
                  labels: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                    example: ['label3', 'label4'],
                  },
                  projectId: {
                    type: 'string',
                  },
                  assignedTo: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                    example: ['userId123'],
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Task updated successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Task updated successfully',
                    },
                    task: {
                      type: 'object',
                      properties: {
                        _id: {
                          type: 'string',
                        },
                        title: {
                          type: 'string',
                        },
                        description: {
                          type: 'string',
                        },
                        dueDate: {
                          type: 'string',
                          format: 'date-time',
                        },
                        status: {
                          type: 'string',
                          enum: ['To Do', 'In Progress', 'Done'],
                        },
                        priority: {
                          type: 'string',
                          enum: ['Low', 'Medium', 'High'],
                        },
                        labels: {
                          type: 'array',
                          items: {
                            type: 'string',
                          },
                        },
                        projectId: {
                          type: 'string',
                        },
                        assignedTo: {
                          type: 'array',
                          items: {
                            type: 'string',
                          },
                        },
                        createdAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                        updatedAt: {
                          type: 'string',
                          format: 'date-time',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Bad request. Invalid input.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Bad request. Missing or invalid parameters.',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Task not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Task not found',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Internal Server Error',
                    },
                  },
                },
              },
            },
          },
        },
      },
      delete: {
        summary: 'Delete task by ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'Task ID',
          },
        ],
        responses: {
          '200': {
            description: 'Task deleted successfully',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Task deleted successfully',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Task not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Task not found',
                    },
                  },
                },
              },
            },
          },
          '500': {
            description: 'Internal Server Error',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Internal Server Error',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }
}
export default taskPaths;
