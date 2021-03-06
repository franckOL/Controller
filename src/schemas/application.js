const { nameRegex } = require('./utils/utils')

const applicationCreate = {
  'id': '/applicationCreate',
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string',
      'minLength': 1,
      'pattern': nameRegex
    },
    'routes': {
      'type': 'array',
      'items': { '$ref': '/routingCreate' }
    },
    'microservices': {
      'type': 'array',
      'items': { '$ref': '/microserviceCreate' }
    },
    'description': { 'type': 'string' },
    'isActivated': { 'type': 'boolean' },
    'isSystem': { 'type': 'boolean' }
  },
  'required': ['name'],
  'additionalProperties': true
}

const applicationUpdate = {
  'id': '/applicationUpdate',
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string',
      'minLength': 1,
      'pattern': nameRegex
    },
    'microservices': {
      'type': 'array',
      'items': { '$ref': '/microserviceCreate' }
    },
    'routes': {
      'type': 'array',
      'items': { '$ref': '/routingCreate' }
    },
    'description': { 'type': 'string' },
    'isActivated': { 'type': 'boolean' },
    'isSystem': { 'type': 'boolean' }
  },
  'additionalProperties': true
}

const applicationPatch = {
  'id': '/applicationPatch',
  'type': 'object',
  'properties': {
    'name': {
      'type': 'string',
      'minLength': 1,
      'pattern': nameRegex
    },
    'description': { 'type': 'string' },
    'isActivated': { 'type': 'boolean' },
    'isSystem': { 'type': 'boolean' }
  },
  'additionalProperties': true
}

module.exports = {
  mainSchemas: [applicationCreate, applicationUpdate, applicationPatch],
  innerSchemas: [applicationCreate]
}
