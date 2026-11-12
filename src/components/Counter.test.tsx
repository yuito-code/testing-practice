import { render, screen, fireEvent} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";

describe("Counterのテスト", () => {
  it("初期値が0で表示される", () => {
    render(<Counter />);

    expect(screen.getByText("現在のカウント：0")).toBeInTheDocument();
  });

  it("ボタンをクリックするとカウントが1増える", () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole("button",{ name: "カウントアップ"}));

    expect(screen.getByText("現在のカウント：1")).toBeInTheDocument();
  });
});