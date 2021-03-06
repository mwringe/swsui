import * as React from 'react';
import { shallow } from 'enzyme';
import ServiceInfoRouteRules from '../ServiceInfoRouteRules';
import { RouteRule } from '../../../../types/ServiceInfo';

const rules: RouteRule[] = [
  {
    name: 'reviews-default',
    createdAt: '2018-03-14T10:17:52Z',
    resourceVersion: '1234',
    destination: {
      name: 'reviews'
    },
    precedence: 1,
    route: [
      {
        labels: { version: 'v1' }
      }
    ],
    match: undefined
  },
  {
    name: 'reviews-test-v2',
    createdAt: '2018-03-14T10:17:52Z',
    resourceVersion: '1234',
    destination: {
      name: 'reviews'
    },
    precedence: 2,
    route: [
      {
        labels: { version: 'v2' }
      }
    ],
    match: undefined
  }
];

describe('#ServiceInfoRouteRules render correctly with data', () => {
  it('should render service rules', () => {
    const wrapper = shallow(
      <ServiceInfoRouteRules
        validations={{}}
        routeRules={rules}
        editorLink={'/namespaces/test_namespace/services/test_services'}
      />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });
});
