/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import InputData from "../components/InputData";

const mockFn = jest.fn();

describe("Header Component", () => {
  test("should render Header component", () => {
    render(<Header />);
    const headerContent = screen.getByTestId("header-1");
    expect(headerContent).toBeInTheDocument();
  });
});

describe("Form", () => {
  test("should render InputForm component", () => {
    render(
      <InputData
        setDestinationPoint={mockFn}
        setEntryPoint={mockFn}
        handleSubmit={mockFn}
      />
    );
    const input = screen.getByTestId("form");
    expect(input).toBeInTheDocument();
  });

  test("inputTextField should have label for sourceAddress", () => {
    const component = render(
      <InputData
        setEntryPoint={mockFn}
        setDestinationPoint={mockFn}
        handleSubmit={mockFn}
      />
    );
    const textContentSource = component.getByPlaceholderText(
      "Enter source address"
    );
    expect(textContentSource).toBe(textContentSource);
  });

  test("inputTextField should have label for destinationAddress", () => {
    const component = render(
      <InputData
        setDestinationPoint={mockFn}
        setEntryPoint={mockFn}
        handleSubmit={mockFn}
      />
    );
    const textContentDestination = component.getByPlaceholderText(
      "Enter destination address"
    );
    expect(textContentDestination).toBe(textContentDestination);
  });

  test("should be able to change source input value", () => {
    render(
      <InputData
        setEntryPoint={mockFn}
        setDestinationPoint={mockFn}
        handleSubmit={mockFn}
      />
    );
    const inputElement = screen.getByPlaceholderText("Enter source address");
    fireEvent.change(inputElement, { target: { value: "Maria01" } });
    expect(inputElement.value).toBe("Maria01");
  });

  test("should be able to change destination input values", () => {
    render(
      <InputData
        setDestinationPoint={mockFn}
        setEntryPoint={mockFn}
        handleSubmit={mockFn}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      "Enter destination address"
    );
    fireEvent.change(inputElement, { target: { value: "Kamppi" } });
    expect(inputElement.value).toBe("Kamppi");
  });

  test("should be able to submit form", () => {
    const { getByRole } = render(
      <InputData
        handleSubmit={mockFn}
        setDestinationPoint={mockFn}
        setEntryPoint={mockFn}
      />
    );
    const buttonElement = getByRole("button");
    fireEvent.submit(buttonElement);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

/** To Do 

import { MockedProvider } from "@apollo/client/testing";
import { graphQlQuery } from "../App";
import Transportation from "../components/Transportation";

 
const mockedInfoData = {
  request: {
    query: graphQlQuery,
    variables: {
      sourceLat: 60.168992,
      lsourceLong: 24.932366,
      desLat: 60.175294,
      desLong: 24.684855,
    },
  },
  result: {
    data: {
      plan: {
        itineraries: [
          {
            legs: [
              {
                startTime: 1648606117000,
                endTime: 1648606380000,
                mode: "WALK",
                duration: 263,
                from: {
                  name: "Origin",
                },
                to: {
                  name: "Kamppi",
                },
              },
              {
                startTime: 1648606380000,
                endTime: 1648607700000,
                mode: "BUS",
                duration: 1320,
                from: {
                  name: "Kamppi",
                },
                to: {
                  name: "Puolarmäki",
                },
              },
              {
                startTime: 1648607700000,
                endTime: 1648607957000,
                mode: "WALK",
                duration: 257,
                from: {
                  name: "Puolarmäki",
                },
                to: {
                  name: "Destination",
                },
              },
            ],
          },
        ],
      },
    },
  },
};

it("renders busSchedule" , async ()=>{


  const { getByTestId } = render(
    <MockedProvider mocks={[mockedInfoData]} addTypename={false}>
      <Transportation
        sourceLat="60.168992"
        sourceLong="24.932366"
        desLat="60.175294"
        desLong="24.684855"
      />
    </MockedProvider>
  );

  expect(getByTestId("loader").toBeInTheDocument());
  
});


 */
