'use client';

import { useState } from 'react';
import { Pagination } from '@malix/ui';

export function PaginationDemo() {
  const [fullPage, setFullPage] = useState(1);
  const [miniPage, setMiniPage] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 14, opacity: 0.7 }}>Full variant</p>
        <Pagination
          variant="full"
          currentPage={fullPage}
          totalPages={5}
          onPageChange={setFullPage}
        />
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 14, opacity: 0.7 }}>Mini variant</p>
        <Pagination
          variant="mini"
          currentPage={miniPage}
          totalPages={10}
          onPageChange={setMiniPage}
        />
      </div>
    </div>
  );
}
